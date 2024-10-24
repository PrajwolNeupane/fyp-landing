"use client";
import { MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/preview.css";

export default function ({ content }: { content: string }) {
  return <MdPreview editorId={"preview-only"} modelValue={content} />;
}
