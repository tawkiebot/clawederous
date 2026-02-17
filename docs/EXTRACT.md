# /extract - URL Summarization

Extract key information from web pages and save it as a memo.

## Usage

**Email format:**
```
Subject: /extract https://example.com/article
Body (optional): What are the main takeaways?
```

## Input

- **Command**: `/extract` followed by a URL
- **Body**: Optional questions or focus areas for the summary

## Output

- **Summary**: Brief overview of the page content
- **Key Points**: Bulleted list of important takeaways
- **Link**: URL to the saved memo for future reference

## Edge Cases

| Issue | Handling |
|-------|----------|
| Invalid URL | Error message with valid URL format |
| Auth Required | Prompt for authentication or skip |
| Long Pages | Truncate with "see full memo" link |
| Custom Questions | Prioritize answers in summary |

## Example

**Email:**
```
Subject: /extract https://blog.example.com/ai-trends
Body: Focus on 2024 predictions and regulatory concerns
```

**Response:**
```
✅ Summary saved!

📄 Source: https://blog.example.com/ai-trends

📝 Summary:
[AI trends article summary]

🎯 Key Points:
• [Point 1]
• [Point 2]
• [Point 3]

💾 Memo: [link to saved memo]
```
