<template>
    <base-item-group :item="item" text sub-group />
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({
                avatar: undefined,
                group: undefined,
                title: undefined,
                children: [],
            }),
        },
    },
}
</script>
