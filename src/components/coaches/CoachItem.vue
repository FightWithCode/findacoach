<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h3>${{ coach.hourlyRate }}</h3>
        <div>
            <BaseBadge v-for="area in coach.areas" :key="area" :type="area" :title="area">{{ area }}</BaseBadge>
        </div>
        <div class="actions">
            <BaseButton mode="outline" :to="contactCoachLink" link>Contact</BaseButton>
            <BaseButton :to="coachDetailLink" link>Coach Detail</BaseButton>
        </div>
    </li>
</template>

<style scoped>
    li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
    }

    h3 {
    font-size: 1.5rem;
    }

    h3,
    h4 {
    margin: 0.5rem 0;
    }

    div {
    margin: 0.5rem 0;
    }

    .actions {
    display: flex;
    justify-content: flex-end;
    }
</style>

<script>
    export default {
        props: ["coach"],
        computed: {
            fullName() {
                return this.coach.firstName + ' ' + this.coach.lastName 
            },
            contactCoachLink() {
                return this.$route.path + "/" + this.coach.id + "/contact"
            },
            coachDetailLink() {
                return this.$route.path + "/" + this.coach.id
            }
        }
    }
</script>
