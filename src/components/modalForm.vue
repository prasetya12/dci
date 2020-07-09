<template>
    <div>
        <header class="modal-card-head text-purple">
                <p class="is-size-5 text-purple">Resend Code</p>
        </header>
        <div class="card modal-card-body" style="border-bottom-right-radius:8px;border-bottom-left-radius:8px;">
            <section>
                <b-input
                    type="email"
                    :value="email"
                    placeholder="Phone Number">
                </b-input>
                <div class="wrap-button" style="margin-top:20px">
                    <b-button type="is-primary button"  expanded>Resend Code</b-button>
                </div>
                <div class="wrap-button" style="margin-top:10px">
                    <b-button type="is-light button" @click="$parent.close()"  expanded>Cancel</b-button>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    props:['phoneNumber'],
    name:'modalForm'
}
</script>