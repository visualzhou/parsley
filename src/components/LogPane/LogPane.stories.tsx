import styled from "@emotion/styled";
import { StoryObj } from "@storybook/react";
import {
  CellMeasurer,
  CellMeasurerCache,
  ListRowRenderer,
} from "react-virtualized";
import LogPane from ".";

export default {
  component: LogPane,
};

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 16,
});

const list = Array.from({ length: 10000 }, (_, i) => `${i}`);

const RowRenderer: ListRowRenderer = (props) => {
  const { index, key, parent } = props;
  return (
    <CellMeasurer key={key} cache={cache} parent={parent} rowIndex={index}>
      <pre {...props}>{index}</pre>
    </CellMeasurer>
  );
};

const Container = styled.div`
  height: 500px;
  width: 800px;
  border: 1px solid black;
`;

export const Default: StoryObj<typeof LogPane> = {
  render: (args) => (
    <Container>
      <LogPane
        {...args}
        cache={cache}
        rowCount={list.length}
        rowRenderer={RowRenderer}
      />
    </Container>
  ),
  args: {},
};
