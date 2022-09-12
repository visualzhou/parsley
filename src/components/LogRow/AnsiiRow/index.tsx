import { forwardRef } from "react";
import BaseRow from "components/LogRow/BaseRow";
import { BaseRowProps } from "../types";

const AnsiiRow = forwardRef<any, BaseRowProps>((rowProps, ref) => {
  const { data, listRowProps } = rowProps;
  const { getLine, wrap, processedLines } = data;
  const { index } = listRowProps;

  const line = processedLines[index];
  // TODO: EVG-17535
  // This should be replaced with a collapsible component
  const lineIndex = Array.isArray(line) ? line[0] : line;
  return (
    <BaseRow wrap={wrap} {...listRowProps} ref={ref}>
      <span data-cy="ansii-row">{getLine(lineIndex)}</span>
    </BaseRow>
  );
});

AnsiiRow.displayName = "AnsiiRow";

export { AnsiiRow };