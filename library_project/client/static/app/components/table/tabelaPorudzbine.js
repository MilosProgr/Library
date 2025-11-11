export default {
    props: ["porudzbine", "naslov"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{
            search: ""
        };
    },
    computed: {
        pronadjeniElementi(){
            return this.porudzbine.filter(post =>
                post.nacinPlacanja.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.valuta.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.IDPorudzbina === Number(this.search) ||
                post.IDKnjiga === Number(this.search) ||
                post.IDKupac === Number(this.search) ||
                post.kolicina === Number(this.search) ||
               
                post.periodIznajmljivanja === Number(this.search) ||
                post.datumPorudzbine.toLowerCase().includes(this.search.toLowerCase()) == 1)
        }
    },
    template: `
<p class="lil sizes"><b>-{{naslov}}</b></p>
<p class="fond">Pretrazi</p>
<input class="form-control me-2" type="text" v-model="search" placeholder="Search" />
<table class="table table-success table-striped">
<thead>
    <tr>
        <th>ID-Porudžbina</th>
        <th>ID-Knjiga</th>
        <th>ID-Kupac</th>
        <th>Količina</th>
        <th>Način plaćanja</th>
        <th>Valuta</th>
        <th>Datum porudžbine</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="poruceno in pronadjeniElementi" :key="porudzbine.IDPorudzbina">
        <td>{{poruceno.IDPorudzbina}}</td>
        <td>{{poruceno.IDKnjiga}}</td>
        <td>{{poruceno.IDKupac}}</td>
        <td>{{poruceno.kolicina}}</td>
        <td>{{poruceno.nacinPlacanja}}</td>
        <td>{{poruceno.valuta}}</td>
        <td>{{poruceno.datumPorudzbine}}</td>
        <td><button class="btn btn-danger me-3" v-on:click="$emit('uklanjanje', poruceno.IDPorudzbina)">Ukloni</button>
            <button class="btn btn-info" v-on:click="$emit('izmena', {...poruceno})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>
    `
}