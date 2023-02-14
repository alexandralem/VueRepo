export default {
    name: 'Error Page',

    created() {
        console.log('hit a route that does not exist');

        //tell the function what vue instance is

        let vm = this;

        setTimeout(function() {
            vm.redirectUser();
        }, 2000);
    },

    methods: {
        redirectUser() {
            this.$router.push({name: 'home'});
        }
    },

    template: `<h1>That page doesn't exist!</h1>`
}