<template>
    <section>
        <CoachFilter @change-filter="setFilters"></CoachFilter>
    </section>
    <section>
        <BaseCard>
            <div>
                <BaseButton mode="outline">Refresh</BaseButton>
                <BaseButton to="/register" link>Register as Coach</BaseButton>
            </div>
            <ul>
                <CoachItem v-for="coach in filterCoaches" :key="coach" :id="coach.id" :coach="coach" ></CoachItem>
            </ul>
        </BaseCard>
    </section>
</template>

<style scoped>
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    .controls {
    display: flex;
    justify-content: space-between;
    }
</style>

<script>
    import CoachItem from '@/components/coaches/CoachItem.vue';
    import CoachFilter from '@/components/coaches/CoachFilter.vue';
    export default {
        components: {
            CoachItem,
            CoachFilter
        },
        data(){
            return {
                activeFilters: {
                    frontend: true,
                    backend: true,
                    career: true,
                }                
            }
        },
        computed: {
            filterCoaches(){
                const coaches = this.$store.getters["coaches/coaches"]
                return coaches.filter(coach=>{
                    if (this.activeFilters.frontend && coach.areas.includes("frontend")) return true
                    if (this.activeFilters.backend && coach.areas.includes("backend")) return true
                    if (this.activeFilters.career && coach.areas.includes("career")) return true
                    return false
                })
            }
        },
        methods: {
            setFilters(updatedFilter){
                this.activeFilters = updatedFilter
            }
        }
    }
</script>

<!-- <template>
    <section>
        <CoachFilter @change-filter="setFilters"></CoachFilter>
    </section>
    <section>
        <BaseCard>
            <div>
                <BaseButton mode="outline">Refresh</BaseButton>
                <BaseButton to="/register" link>Register as Coach</BaseButton>
            </div>
            <ul>
                <CoachItem v-for="coach in filterCoaches" :key="coach" :id="coach.id" :coach="coach" ></CoachItem>
            </ul>
        </BaseCard>
    </section>
</template>

<style scoped>
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    .controls {
    display: flex;
    justify-content: space-between;
    }
</style>

<script>
    import CoachItem from '@/components/coaches/CoachItem.vue';
    import CoachFilter from '@/components/coaches/CoachFilter.vue';
    export default {
        components: {
            CoachItem,
            CoachFilter
        },
        data(){
            return {
                filterCoaches: this.$store.getters["coaches/coaches"]
            }
        },
        methods: {
            setFilters(updatedFilter){
                this.filterCoaches = this.$store.getters["coaches/coaches"].filter(coach=>{
                    if (updatedFilter.frontend && coach.areas.includes("frontend")) return true
                    if (updatedFilter.backend && coach.areas.includes("backend")) return true
                    if (updatedFilter.career && coach.areas.includes("career")) return true
                    return false
                })
            }
        }
    }
</script> -->
