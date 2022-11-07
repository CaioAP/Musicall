<template>
  <ContentSection
    title="Estúdios"
    subtitle="Meus estúdios"
    action="Adicionar estúdio"
    @add="
      $router.push({
        path: '/contents/professors/new',
        query: {
          f: 1,
        },
      })
    "
  >
    <div class="content-grid" :class="{ empty: !professors.length }">
      <ContentCard
        v-if="!professors.length"
        title="Cadastrar Novo"
        icon="add-studio"
      />

      <ContentProfessorCard
        v-for="professor in professors"
        :key="professor.id"
        v-bind="professor"
      />
    </div>
  </ContentSection>
</template>

<script>
import Role from "~/assets/data/role.js"

export default {
  name: "InstrumentsPage",
  meta: {
    role: [Role.ADMIN],
  },
}
</script>

<style lang="scss" scoped></style>
