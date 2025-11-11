export default {
    props: ["korisnici", "naslov"],
    emits:["izmena", "uklanjanje"],

    data(){
        return{
            search: ""
        }
    },
    computed: {
        pronadjeniElementi(){
            return this.korisnici.filter(post =>
                post.email.toLowerCase().includes(this.search.toLowerCase()) == 1 ||
                post.IDKorisnik === Number(this.search) ||
                post.lozinka.toLowerCase().includes(this.search.toLowerCase()) == 1);
        }
    },
    template: `
<p class="font-monospace"><b>-{{naslov}}</b></p>
<label class="fond">Pretraga korisnika</label>
<input class="form-control me-2" type="text" v-model="search" placeholder="pretrazi">
<table class="table table-success table-striped">
<thead>
    <tr>
        <th>ID-Korisnik</th>
        <th>E-mail</th>
        <th>Lozinka</th>
        <th>Akcije</th>
    </tr>
</thead>
<tbody>
    <tr v-for="korisnik in pronadjeniElementi" :key="korisnici.IDKorisnik">
        <td>{{korisnik.IDKorisnik}}</td>
        <td>{{korisnik.email}}</td>
        <td>{{korisnik.lozinka}}</td>
        <td><button class="btn btn-danger me-3" v-on:click="$emit('uklanjanje', korisnik.IDKorisnik)">Ukloni</button>
            <button class="btn btn-info" v-on:click="$emit('izmena', {...korisnik})">Izmena</button>
        </td>
    </tr>
</tbody>
</table>
    `,
    
}