export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [{
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
    ],
};