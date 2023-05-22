import AGGrid from "./AGGrid"

export default {
    title: 'Components/AGGrid',
    component: AGGrid,
    tags: ['autodocs'],
    argTypes: {
      //backgroundColor: { control: 'color' },
    },
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AGGridBasic = {
    args: {
    //   primary: true,
    //   label: 'Button',
    },
  };