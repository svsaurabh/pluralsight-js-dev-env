export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 500,
      "maxItems": 550,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          }
        },
        "required": ["id", "firstName"]
      }
    }
  },
  "required": ["users"]
};
