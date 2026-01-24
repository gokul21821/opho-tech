Landing Page Integration Guide: Edition & Category Fields
Current API Response Structure (Before Changes)
{  "success": true,  "data": [    {      "id": "cmk6zmeg0000004l803ctgxqg",      "title": "Newsletter Title",      "description": "<p>HTML content...</p>",      "date": "2025-01-01T00:00:00.000Z",      "imageUrl": "/images/content.jpg",      "author": {        "id": "1",        "username": "admin",        "email": "admin@ophotech.com"      }    }  ]}
Updated API Response Structure (After Backend Changes)
{  "success": true,  "data": [    {      "id": "cmk6zmeg0000004l803ctgxqg",      "title": "Newsletter Title",      "description": "<p>HTML content...</p>",      "date": "2025-01-01T00:00:00.000Z",      "imageUrl": "/images/content.jpg",      "edition": "Edition 001",  // NEW: Only for newsletters, optional      "category": null,           // NEW: Only for case studies, optional      "author": {        "id": "1",        "username": "admin",        "email": "admin@ophotech.com"      }    }  ]}
Type Definitions Updates
Current Types (in your landing page types/index.ts or equivalent):
export interface Newsletter {  id: string;  title: string;  description: string;  date: string;  imageUrl?: string | null;  author: {    id: string;    username: string;    email: string;  };}export interface CaseStudy {  id: string;  title: string;  description: string;  date: string;  imageUrl?: string | null;  author: {    id: string;    username: string;    email: string;  };}
Updated Types:
export interface Newsletter {  id: string;  title: string;  description: string;  date: string;  imageUrl?: string | null;  edition?: string | null;  // NEW: Free-form text like "Edition 001"  author: {    id: string;    username: string;    email: string;  };}export interface CaseStudy {  id: string;  title: string;  description: string;  date: string;  imageUrl?: string | null;  category?: string | null;  // NEW: Free-form text like "IT & services"  author: {    id: string;    username: string;    email: string;  };}
UI Display Recommendations
1. Newsletters - Edition Display
Location: Show near the title or in a subtitle area
Format: Display as-is (user-entered text)
Fallback: Hide if null/empty
// Example newsletter card/component<div className="newsletter-card">  <h2>{newsletter.title}</h2>  {newsletter.edition && (    <div className="edition-badge">      {newsletter.edition}    </div>  )}  <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} /></div>
2. Case Studies - Category Display
Location: Show as a tag/label or filter category
Format: Display as-is (user-entered text)
Fallback: Hide if null/empty or show "Uncategorized"
// Example case study card/component<div className="case-study-card">  <div className="category-tag">    {caseStudy.category || "Uncategorized"}  </div>  <h2>{caseStudy.title}</h2>  <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} /></div>
3. Filtering/Search Enhancement
Consider adding category-based filtering for case studies:
// Example filter componentconst categories = [...new Set(caseStudies.map(cs => cs.category).filter(Boolean))];
API Integration Checklist
Update Type Definitions: Add edition? to Newsletter, category? to CaseStudy
Data Fetching: No changes needed - API returns the new fields automatically
UI Components: Add conditional rendering for edition/category display
Styling: Add appropriate CSS classes for edition badges/category tags
Testing: Verify existing content (without edition/category) still displays correctly
Backward Compatibility
Existing Content: All existing newsletters/case studies will have edition: null and category: null
No Breaking Changes: API responses include the new fields but they're optional
Progressive Enhancement: Landing page can show/hide new fields based on presence
Example Implementation Code
// NewsletterDetailPage componentexport default function NewsletterDetailPage({ newsletter }: { newsletter: Newsletter }) {  return (    <article>      <header>        <h1>{newsletter.title}</h1>        {newsletter.edition && (          <span className="edition-label">{newsletter.edition}</span>        )}        <time>{formatDate(newsletter.date)}</time>      </header>            <div         className="content"        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}       />    </article>  );}// CaseStudyCard componentexport function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {  return (    <div className="card">      {caseStudy.category && (        <span className="category-pill">{caseStudy.category}</span>      )}      <h3>{caseStudy.title}</h3>      <p>{caseStudy.description.slice(0, 150)}...</p>    </div>  );}
Data Migration Notes
Backend migration adds nullable columns, so existing data won't break
New content created after deployment will include edition/category
Landing page should handle both scenarios (with/without new fields)