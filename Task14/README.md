# Task 14: Form Validation & Security Best Practices

A security-hardened backend endpoint built using Node.js, Express, and `express-validator` to demonstrate secure data handling procedures through structural validation and string sanitization pipelines.

## 🔒 Security Implementations

- **Data Integrity Checks:** Validates complex patterns (email formats, password rules) prior to logic execution.
- **XSS Mitigation:** Sanitizes input strings using HTML entity escaping mechanisms to protect against Cross-Site Scripting injection vectors.
- **Normalizations:** Sanitizes data variants by forcing consistent formats (e.g., lowercasing emails via `normalizeEmail`).

---

## 🧪 API Route Signature

### Secure User Registration
- **Endpoint:** `POST /api/register`
- **Headers:** `Content-Type: application/json`

#### Example Malicious Payload Attempt:
```json
{
  "username": "<script>alert('hack')</script>Ritika",
  "email": "USER@Domain.com ",
  "password": "validPassword1"
}