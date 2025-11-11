export default {
    props: ["bibliotekari", "naslov"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{
            search: ""
        }
    },
    computed: {
        pronadjeniElementi(){
        return this.bibliotekari.filter(post =>
            post.id === Number(this.search) ||
            post.korisnicko_ime.toLowerCase(this.search.toLowerCase()) ||
            post.lozinka.toLowerCase(this.search.toLowerCase()) == 1)
        }
    },
    template: `
<p class="font-weight-bold lil"><b>-{{naslov}}</b></p>
<input class="form-control me-2" type="text" v-model="search" placeholder="Search" />
<table class="table table-success table-striped">
<thead>
    <tr>
        <th>ID</th>
        <th>Korisnicko ime</th>
        <th>Lozinka</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="bibliotekar in pronadjeniElementi" :key="bibliotekari.id">
        <td>{{bibliotekar.id}}</td>
        <td>{{bibliotekar.korisnicko_ime}}</td>
        <td>{{bibliotekar.lozinka}}</td>
        <td><button class="btn btn-danger me-3" v-on:click="$emit('uklanjanje', bibliotekar.id)">Ukloni</button>
            <button class="btn btn-info" v-on:click="$emit('izmena', {...bibliotekar})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>

    `,
    
}