import New from './New';

export default {
    title: 'Example/Teleport',
    component: New,
}


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { New },
    template: '<new :disabled="disabled" />',
})


export const TeleportOn = Template.bind({});
TeleportOn.args = {
    disabled: {controls: false},
}

export const TeleportOff = Template.bind({});
TeleportOff.argTypes = {
    disabled: {
        control: false
    }
}
TeleportOff.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const TeleportTest = Template.bind({});
TeleportTest.storyName = 'Mobile test'
TeleportTest.args = {}
TeleportTest.parameters = {
    // docs: { disable: true},
    // backgrounds: { disable: true },
    viewport: {
        defaultViewport: 'iphonex'
    },
}
