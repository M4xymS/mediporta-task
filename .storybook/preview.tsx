import type {Preview} from "@storybook/react";
import '../src/index.css'
import {Provider} from "react-redux";
import store from "../src/store/store";
import {TooltipProvider} from "@radix-ui/react-tooltip";

const preview: Preview = {
  decorators: [
    (Story) => (
        <Provider store={store}>
          <TooltipProvider delayDuration={10} disableHoverableContent>
            <Story />
          </TooltipProvider>
            </Provider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
