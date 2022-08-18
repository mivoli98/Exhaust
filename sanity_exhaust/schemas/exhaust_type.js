export default {
    name: 'exhaust_type',
    title: 'Exhaust Type',
    type: 'document',
    fields: [{
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Exhaust Name',
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
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'availability',
            title: 'Availability',
            type: 'string',
        },
        {
            name: 'shipping_weight',
            title: 'Shipping Weight',
            type: 'number',
        },
        {
            name: 'shipping_dimensions',
            title: 'Shipping Dimensions',
            type: 'string',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
        },
        {   
            name: 'belongTo',
            title: 'Belong To',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'model'},
                  {type: 'model_type'}
                ]
              }
            ]
        }
    ]
}