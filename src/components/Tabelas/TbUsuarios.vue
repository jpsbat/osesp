<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <md-table v-model="usuarios" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Usuário">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Login">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Permissão">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Ativo">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Alterar"
          ><button class="btn" style="color: blue">
            <i class="fa fa-pencil" style="margin-right: 8px"></i>Alterar
          </button></md-table-cell
        >
        <md-table-cell md-label="Excluir"
          ><button class="btn" style="color: red">
            <i class="fa fa-trash" style="margin-right: 8px"></i>Excluir
          </button></md-table-cell
        >
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "tbusuarios",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      usuarios: [
        {
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas",
        },
        {
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park",
        },
        {
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester",
        },
        {
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
        },
        {
          name: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "Gloucester",
        },
      ],
    };
  },
};
</script>
