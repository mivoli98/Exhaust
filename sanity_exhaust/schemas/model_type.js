export default {
    name: 'model_type',
    title: 'Model type',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            option: {
                source: 'name',
                maxLength: 90,
            }
        },  
        {
            name: 'numOfProducts',
            title: 'Number of Products',
            type: 'number',
        },
        {
            name: 'belongTo',
            title: 'Belong To',
            type: 'reference',
                to: [
                    {type: 'model',}
                ]
        },      
    ]
}