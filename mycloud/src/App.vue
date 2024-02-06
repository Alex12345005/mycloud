<template>
  <div>
    <div class="uk-position-relative">
      <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent">
          <div class="uk-container">
            <div uk-navbar>

              <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                  <RouterLink to="/">Home</RouterLink>
                  <RouterLink to="/about">About</RouterLink>
                  <!-- Fügen Sie hier weitere Navigationslinks hinzu, falls gewünscht -->
                </ul>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
/* Stilisierung Ihrer Elemente */
</style>
