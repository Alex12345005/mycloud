<!-- App.vue -->

<template>
    <div>
      <h1>Ordner und Dateien</h1>
      <div class="folders">
        <div
          class="folder"
          v-for="folder in folders"
          :key="folder.id"
          @click="showFiles(folder.id)"
        >
          {{ folder.name }}
        </div>
      </div>
      <div class="files">
        <div class="file" v-for="file in files" :key="file.id">
          {{ file.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        folders: [],
        files: [],
      };
    },
    methods: {
      async showFiles(folderId) {
        // Hier sollte die Logik implementiert werden, um Dateien in einem Ordner anzuzeigen
        // Rufen Sie die Dateien für den ausgewählten Ordner von Ihrer API ab und aktualisieren Sie die 'files'-Daten
      },
    },
    created() {
      // Hier sollten Sie die Ordner beim Laden der Seite von Ihrer API abrufen und die 'folders'-Daten aktualisieren
    },
  };
  </script>
  
  <style>
  /* Fügen Sie hier Ihre CSS-Stile hinzu, um die Ordner und Dateien anzuzeigen */
  </style>
  