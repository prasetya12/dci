<template>
    <div class="container">
      <div class="columns">
        <div class="column is-narrow">
            <div class="box" style="width: 400px;padding:0;padding-bottom:20px">
                <!-- <div class="con-cover-img" style="max-height:150px">
                    <img class="cover-img" :src="require('@/assets/defaultCover.jpg')" style="height:150px">
                </div> -->
                <figure class="image is-3by1" @mouseover="coverHover = true" @mouseleave="coverHover = false">
                    
                    <img :src="require('@/assets/defaultCover.jpg')">
                </figure>
                <div style="display:flex;justify-content:center;margin-top:-50px">
                    <figure class="image is-128x128" style="display:flex;align-items:center;justify-content:center" @mouseover="isHover = true" @mouseleave="isHover = false" >
                        <div v-if="isHover" class="editprofile">
                            Edit
                        </div>
                        <img class="is-rounded" :src="require('@/assets/userdefault.jpg')" style="border:5px solid white" >
                    </figure>
                </div>
                <div style="margin-top:10px">
                    Rizal Prasetya
                </div>
                <div class="text-grey is-size-6">
                    Indonesia
                </div>
                <div style="display:flex;justify-content:left;padding-left:40px;padding-top:20px;padding-right:40px;margin-top:20px">
                    <b-icon
                        pack="fas"
                        icon="venus-mars"
                        size="is-small"
                        class="text-purple">
                    </b-icon>
                    <div class="text-grey is-size-7" style="margin-left:20px">
                        Laki-Laki
                    </div>
                </div>
                <div style="display:flex;justify-content:left;padding-left:40px;padding-right:40px;margin-top:10px">
                    <b-icon
                        pack="fas"
                        icon="calendar"
                        size="is-small"
                        class="text-purple">
                    </b-icon>
                    <div class="text-grey is-size-7" style="margin-left:20px">
                        12/ 02/ 1999
                    </div>
                </div>
                <div style="display:flex;justify-content:left;padding-left:40px;padding-right:40px;margin-top:10px">
                    <b-icon
                        pack="fas"
                        icon="map-marker-alt"
                        size="is-small"
                        class="text-purple">
                    </b-icon>
                    <div class="text-grey is-size-7" style="margin-left:20px">
                        Indonesia
                    </div>
                </div>
                <div style="display:flex;justify-content:left;padding-left:40px;padding-right:40px;margin-top:10px">
                    <b-icon
                        pack="fas"
                        icon="sticky-note"
                        size="is-small"
                        class="text-purple">
                    </b-icon>
                    <div class="text-grey is-size-7" style="margin-left:20px">
                        Programmmer
                    </div>
                    <!-- <div></div> -->
                </div>
                <div>
                    <div class="text-grey is-size-7" style="margin-top:40px">
                        <b-button style="margin-right:20px" type="is-warning">Edit</b-button>
                        <b-button type="is-danger">Logout</b-button>

                    </div>
                </div>
                
            </div>
        </div>
        <div class="column">
            <div class="box">
            
            <p class="subtitle">This column will take up the remaining space available.</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ProfilePage',
    data(){
        return{
            isHover:false,
            coverHover:false
        }
    }
}
</script>
<style scoped>
.container{
        height: 100vh;
        padding-top: 50px;
        justify-content: center;
        display: flex;
    }
.box{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}



.editprofile{
    position:absolute;
    display:flex;
    cursor:pointer;
    background-color:black;
    width:100%;
    height:100%;
    border-radius:100px;
    align-items:center;
    justify-content:center;
    opacity: 0.5;
    border:5px solid white
}

.editcover{
    display:flex;
    cursor:pointer;
    background-color:black;
    width:100%;
    height:100%;
    border-radius:200px;
    align-items:center;
    justify-content:center;
    opacity: 0.5;
    border:5px solid white
}
</style>