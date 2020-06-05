<template>
    <main>

    </main>
</template>

<script>
export default {
    components: {
        ParagraphHeading: {
            render (h) {
                return h('div', {
                    class: 'headline font-weight-light col cols-12',
                }, this.$slots.default)
            },
        },
    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
