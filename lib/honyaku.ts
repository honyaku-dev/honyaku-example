type HonyakuLeaf = { text: string; description?: string };
type HonyakuMessages = { [key: string]: HonyakuLeaf | HonyakuMessages };
type SimpleMessages = { [key: string]: string | SimpleMessages };

function isHonyakuLeaf(value: unknown): value is HonyakuLeaf {
  return (
    typeof value === "object" &&
    value !== null &&
    "text" in value &&
    typeof (value as HonyakuLeaf).text === "string"
  );
}

export function convertHonyakuMessages(messages: HonyakuMessages): SimpleMessages {
  const result: SimpleMessages = {};

  for (const [key, value] of Object.entries(messages)) {
    if (isHonyakuLeaf(value)) {
      result[key] = value.text;
    } else if (typeof value === "object" && value !== null) {
      result[key] = convertHonyakuMessages(value as HonyakuMessages);
    } else {
      result[key] = value as string;
    }
  }

  return result;
}
