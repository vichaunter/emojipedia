import { describe, expect, it } from "vitest";
import slugify from "./slugify";

describe("slugify", () => {
  it("should convert a string to lowercase", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("should replace spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("  Hello   World  ")).toBe("hello-world");
  });

  it("should collapse multiple spaces into a single hyphen", () => {
    expect(slugify("Hello   World")).toBe("hello-world");
  });

  it("should remove invalid characters", () => {
    expect(slugify("Hello!@#$%^&*()_+=-`~[]\{}|;':\",./<>?World")).toBe(
      "hello-world"
    );
  });

  it("should handle strings with existing hyphens", () => {
    expect(slugify("Hello-World")).toBe("hello-world");
  });

  it("should handle strings with existing multiple hyphens", () => {
    expect(slugify("Hello---World")).toBe("hello-world");
  });

  it("should handle empty strings", () => {
    expect(slugify("")).toBe("");
  });

  it("should handle strings with only spaces", () => {
    expect(slugify("   ")).toBe("");
  });

  it("should handle strings with leading/trailing spaces", () => {
    expect(slugify(" Hello World ")).toBe("hello-world");
  });

  it("should handle strings with mixed case and special characters", () => {
    expect(slugify("Hello   World!@#$ 123 Test")).toBe("hello-world-123-test");
  });

  it("should collapse multiple invalid characters into a single hyphen (or remove if at the start/end)", () => {
    expect(slugify("Hello!!!World")).toBe("hello-world");
    expect(slugify("!!!Hello World!!!")).toBe("hello-world");
    expect(slugify("!!!Hello!!!World!!!")).toBe("hello-world");
    expect(slugify("Hello   !!!   World")).toBe("hello-world");
  });
});
