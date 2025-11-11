////Prikaz jednog proizvoda i mogucnost izmene
export default {
    template:`
<form v-on:submit.prevent="update" class="w-50 p-3">
<p class="fond"><b>-Izmena biblioteke</b></p>
<div class="mb-3">
    <label class="form-label fond">Naziv: </label>
    <input type="text" class="form-control" v-model="biblioteka.naziv" required>
    <div class="form-text"><i class="placeh tekst">Izmeni naziv</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Adresa: </label>
    <input type="text" class="form-control" v-model="biblioteka.adresa" required>
    <div class="form-text"><i class="placeh tekst">Izmeni adresu</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">Telefon: </label>
    <input type="tel" class="form-control" v-model="biblioteka.telefon" required>
    <div class="form-text"><i class="placeh tekst">Izmeni kontakt-telefon</i></div>
</div>
<div class="mb-3">
    <label class="form-label fond">E-mail: </label>
    <input type="email" class="form-control" v-model="biblioteka.email" required>
    <div class="form-text"><i class="placeh tekst">Izmeni e-mail adresu</i></div>
</div>

<div>
    <button type="submit" class="btn btn-info">Izmeni</button>
</div>
</form>
    `,
    data(){
        return {
            biblioteka: {},
        }
    },
    methods:{
        refresh(){
            axios.get(`api/biblioteke/${this.$route.params['id']}`).then((response) => {            
                this.biblioteka = response.data;
            });
        },
        update(){
            axios.put(`api/biblioteke/${this.$route.params['id']}`, this.biblioteka).then((response) => {
                this.$router.push("/biblioteke");
            });
        }
    },

    
    created(){
        this.refresh();

    }
}