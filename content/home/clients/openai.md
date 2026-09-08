---
title: OpenAI SDK
weight: 20
---

```python
from openai import OpenAI
client = OpenAI(base_url="http://127.0.0.1:4080/v1", api_key="unused")
print(client.chat.completions.create(
    model="llama3.2",
    messages=[{"role": "user", "content": "hello"}],
))
```
