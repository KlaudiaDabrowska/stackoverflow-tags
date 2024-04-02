import { ArgTypes } from "@/stories/types/ArgTypes";

type Props = {
  error?: string;
  statusCode?: number;
};

const argTypes: ArgTypes<Props> = {
  error: {
    description: "`string`",
  },
  statusCode: {
    description: "`number` or `undefined`",
  },
};

export default argTypes;
