import Quill from "quill";
import { RefObject } from "react";

class QuillMock {}

const Delta = Quill?.import("delta") ?? QuillMock;
const Bold = Quill?.import("formats/bold") ?? QuillMock;
const Break = Quill?.import("blots/break") ?? QuillMock;
const Embed = Quill?.import("blots/embed") ?? QuillMock;

function lineBreakMatcher() {
  const newDelta = new Delta();
  newDelta.insert({ break: "" });
  return newDelta;
}

class SmartBreak extends Break {
  static blotName = "break";
  static tagName = "BR";

  length() {
    return 1;
  }

  value() {
    return "\n";
  }

  insertInto(parent: Element, ref: Element) {
    Embed.prototype.insertInto.call(this, parent, ref);
  }
}

class Mark extends Bold {
  static blotName = "mark";
  static tagName = ["MARK"];
}

Quill?.register(SmartBreak);
Quill?.register(Mark);

export function lineBreakHandler(quill: RefObject<Quill>) {
  return {
    key: 13,
    shiftKey: true,
    handler: function (range: { index: number }) {
      if (!quill.current) {
        return;
      }
      let currentLeaf = quill.current.getLeaf(range.index)[0];
      let nextLeaf = quill.current.getLeaf(range.index + 1)[0];

      quill.current.insertEmbed(range.index, "break", true, "user");

      // Insert a second break if:
      // At the end of the editor, OR next leaf has a different parent (<p>)
      if (nextLeaf === null || currentLeaf.parent !== nextLeaf.parent) {
        quill.current.insertEmbed(range.index, "break", true, "user");
      }
      // Now that we've inserted a line break, move the cursor forward
      quill.current.setSelection(range.index + 1, 0, Quill.sources.SILENT);
    },
  };
}

export { Quill, Delta, lineBreakMatcher };
