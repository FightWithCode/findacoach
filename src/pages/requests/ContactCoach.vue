<template>
    <form>
        <div class="form-control">
            <label for="email">Your E-mail</label>
            <input type="email" id="email">
        </div>
        <div class="form-control">
            <label for="message">Message</label>
            <textarea id="message" rows="5"></textarea>
        </div>
        <div class="actions">
            <BaseButton>Send Message</BaseButton>
        </div>
    </form> 
</template>