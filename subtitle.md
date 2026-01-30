Based on the subtitle field implementation in the dashboard/backend, here's what needs to be updated in your landing page repository:

## 1. **Type Definitions Updates**

Update your content type interfaces to include the new `subtitle` field:

```typescript
// In your landing page types/content.ts or equivalent

export interface Newsletter {
  id: string;
  title: string;
  subtitle?: string | null;  // ← NEW FIELD
  content: TiptapDoc;
  date: string;
  edition?: string | null;
  status: PublishStatus;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string | null;
  author: {
    id: string;
    username: string;
    email: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  subtitle?: string | null;  // ← NEW FIELD
  content: TiptapDoc;
  date: string;
  status: PublishStatus;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string | null;
  author: {
    id: string;
    username: string;
    email: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle?: string | null;  // ← NEW FIELD
  content: TiptapDoc;
  date: string;
  category?: string | null;
  status: PublishStatus;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string | null;
  author: {
    id: string;
    username: string;
    email: string;
  };
}
```

## 2. **API Response Changes**

The backend API responses now include `subtitle` in all endpoints:

### Affected API Endpoints (no URL changes, just response shape):
- `GET /api/newsletters` (public list)
- `GET /api/newsletters/admin` (admin list) 
- `GET /api/newsletters/:id` (single newsletter)
- `GET /api/blogs` (public list)
- `GET /api/blogs/admin` (admin list)
- `GET /api/blogs/:id` (single blog)
- `GET /api/case-studies` (public list)
- `GET /api/case-studies/admin` (admin list)
- `GET /api/case-studies/:id` (single case study)

### Response Format Change:
```json
{
  "success": true,
  "data": {
    "id": "cmk6zmeg0000004l803ctgxqg",
    "title": "Newsletter Title",
    "subtitle": "Optional subtitle text",  // ← NEW FIELD (can be null)
    "content": {...},
    "date": "2025-01-01T00:00:00Z",
    "imageUrl": "/images/content.jpg",
    "author": {
      "id": "1",
      "username": "admin",
      "email": "admin@ophotech.com"
    }
  }
}
```

## 3. **Hero Section Rendering Updates**

Update your hero/title sections to display subtitle below the title:

### For Blog Detail Pages:
```typescript
// In your blog detail page component (e.g., pages/blogs/[id].tsx)
export default function BlogDetailPage({ blog }: { blog: Blog }) {
  return (
    <article>
      <header className="hero-section">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        {blog.subtitle && (
          <p className="text-xl text-gray-600 mt-2">{blog.subtitle}</p>
        )}
      </header>
      {/* rest of content */}
    </article>
  );
}
```

### For Newsletter Detail Pages:
```typescript
// Similar pattern for newsletter detail pages
export default function NewsletterDetailPage({ newsletter }: { newsletter: Newsletter }) {
  return (
    <article>
      <header className="hero-section">
        <h1 className="text-4xl font-bold">{newsletter.title}</h1>
        {newsletter.subtitle && (
          <p className="text-xl text-gray-600 mt-2">{newsletter.subtitle}</p>
        )}
        {/* edition display if applicable */}
      </header>
      {/* rest of content */}
    </article>
  );
}
```

### For Case Study Detail Pages:
```typescript
// Similar pattern for case study detail pages
export default function CaseStudyDetailPage({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article>
      <header className="hero-section">
        <h1 className="text-4xl font-bold">{caseStudy.title}</h1>
        {caseStudy.subtitle && (
          <p className="text-xl text-gray-600 mt-2">{caseStudy.subtitle}</p>
        )}
        {/* category display if applicable */}
      </header>
      {/* rest of content */}
    </article>
  );
}
```

## 4. **Content List/Card Components**

Update content cards in list views to optionally show subtitle:

```typescript
// In your ContentCard or similar component
interface ContentCardProps {
  id: string;
  title: string;
  subtitle?: string | null;  // ← NEW PROP
  date: string;
  contentType: 'newsletters' | 'blogs' | 'case-studies';
}

export function ContentCard({ title, subtitle, date, contentType }: ContentCardProps) {
  return (
    <article className="content-card">
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && (
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      )}
      <time className="text-xs text-gray-500">{formatDate(date)}</time>
    </article>
  );
}
```

## 5. **API Data Processing**

No changes needed to API calls themselves, but ensure your data fetching functions handle the new field:

```typescript
// In your API client or data fetching functions
export async function fetchBlogById(id: string): Promise<Blog> {
  const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
  const data = await response.json();
  
  // subtitle is now automatically included in the response
  return data.data; // { id, title, subtitle, content, ... }
}
```

## 6. **Backward Compatibility**

The changes are backward compatible:
- Existing content without subtitles will have `subtitle: null`
- The field is optional, so existing code won't break
- Only render subtitle if it exists and is non-empty: `{subtitle && <p>{subtitle}</p>}`

## 7. **Testing Considerations**

After implementing:
- Test existing content (should work without subtitle display)
- Test new content with subtitles (should display below title)
- Test API responses include the new field
- Test that subtitle appears in hero sections but not in dashboard table (as requested)

## Summary

The main changes are:
1. **Types**: Add `subtitle?: string | null` to all content interfaces
2. **Rendering**: Display subtitle below title in hero sections when present
3. **API**: Responses now include subtitle (no endpoint changes)
4. **Cards**: Optionally show subtitle in content previews

The backend API changes are already complete - you just need to consume the new `subtitle` field in your landing page components.