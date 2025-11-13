
export default {
    template: `
<div class="w-75 p-3" v-if="stranicaZaPrikaz=='kupci'">
    <kupac-form v-on:sacuvaj="createKupac" v-bind:greska="greska" v-bind:naslov="'Dodaj kupca'" v-bind:dugme="'Dodaj'"></kupac-form>
</div>
<button v-on:click="navigate('kupci')" type="button" class="btn btn-primary btn-lg btn-block">Registruj se kao kupac</button>

<div class="w-80 p-3">
    <tabela-kupca v-bind:naslov="'Tabela kupaca'" v-bind:kupci="kupci" v-on:uklanjanje="removeKupac" v-on:izmena="setKupacZaIzmenu"></tabela-kupca>
</div>
    `,
    data() {
        return {
            kupci: [],

            kupacZaIzmenu: {},

            stranicaZaPrikaz: "",

            greska: "nemaGreske",

            validations: {}
        }
    },
    methods: {
        setKupacZaIzmenu(kupac) { //skladistenje nakon izmene//
            this.$router.push(`/kupci/${kupac.IDKupac}`);
        },

        refreshKupac() {
            axios.get("api/kupci").then((response) => {
                ////Stil datuma u tabeli
                for (let d of response.data) {
                    d.datumRodjenja = new Date(d.datumRodjenja).toDateString().split("Z")[0];
                }
                this.kupci = response.data;
            });
        },

        //dodavanje//
        createKupac(kupac) {
            this.greska = "nemaGreske";
            if (new Date(kupac.datumRodjenja) > new Date()) {
                this.greska = "greska";
            }
            else {
                axios.post("api/kupci", kupac).then((response) => {
                    this.refreshKupac();
                });


            }
        },

        //izmena//
        updateKupac(kupac) {
            this.greska = "nemaGreske";
            if (new Date(kupac.datumRodjenja) < new Date() && new Date() < age) {
                this.greska = "greska";
            }
            else {
                axios.put(`api/kupci/${kupac.IDKupac}`, kupac).then((response) => {
                    this.refreshKupac();
                });
            }

        },

        //brisanje//
        removeKupac(IDKupac) {
            axios.delete(`api/kupci/${IDKupac}`).then((response) => {
                this.refreshKupac();
            });
        },

        navigate(page) {
            this.stranicaZaPrikaz = page;
        },


    },
    created() {
        this.refreshKupac();
    }
}