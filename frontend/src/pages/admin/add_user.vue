<template>
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__container">
            <h1 class="h2">Add User</h1>

            <div class="card">
                <ul class="nav nav-tabs nav-tabs-card">
                    <li class="nav-item">
                        <a
                                class="nav-link active"
                                href="#first"
                                data-toggle="tab"
                        >Account</a>
                    </li>
                </ul>
                <div class="tab-content card-body">
                    <div
                            class="tab-pane active"
                            id="first"
                    >
                        <form
                                enctype="multipart/form-data"
                                @submit.prevent="addNewUser()"
                                class="form-horizontal"
                        >
                            <div class="form-group row">
                                <label
                                        for="avatar"
                                        class="col-sm-3 col-form-label form-label"
                                >Avatar</label>
                                <div class="col-sm-9">
                                    <div class="media align-items-center">
                                        <div class="media-left">
                                            <div class="icon-block rounded">
                                                <!-- <i class="material-icons text-muted-light md-36">photo</i> -->
                                                <img
                                                        v-if="userData.avatar_url"
                                                        :src="userData.avatar_url"
                                                />
                                                <img
                                                        v-else
                                                        :src="routes.server_api+ '/img/default_avatar.jpg'"
                                                />
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <div
                                                    class="custom-file"
                                                    style="width: auto;"
                                            >
                                                <input
                                                        type="file"
                                                        id="avatar"
                                                        accept="image/*"
                                                        @change="onImageInputChanged"
                                                        class="custom-file-input"
                                                >
                                                <label
                                                        for="avatar"
                                                        class="custom-file-label"
                                                >Choose file</label>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                        for="name"
                                        class="col-sm-3 col-form-label form-label"
                                >Full Name</label>
                                <div class="col-sm-8">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input
                                                    id="name"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="First Name"
                                                    v-model="userData.first_name"
                                            >

                                        </div>
                                        <div class="col-md-6">
                                            <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Last Name"
                                                    v-model="userData.last_name"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                        for="email"
                                        class="col-sm-3 col-form-label form-label"
                                >Email</label>
                                <div class="col-sm-6 col-md-6">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="material-icons md-18 text-muted">mail</i>
                                            </div>
                                        </div>
                                        <input
                                                type="text"
                                                id="email"
                                                class="form-control"
                                                placeholder="Email Address"
                                                v-model="userData.email"
                                        >

                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                        for="name"
                                        class="col-sm-3 col-form-label form-label"
                                >Phone Number</label>
                                <div class="col-sm-8">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input
                                                    id="name"
                                                    type="tel"
                                                    class="form-control"
                                                    placeholder="Phone Number"
                                                    v-model="userData.phone_number"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                        for="user-role"
                                        class="col-sm-3 col-form-label form-label"
                                >User Role</label>
                                <div class="col-sm-6 col-md-6">
                                    <select
                                            id="user-role"
                                            class="form-control custom-select"
                                            v-model="userData.role"
                                            @change="getInstructorList"
                                    >
                                        <option
                                                value="0"
                                                selected
                                                disabled
                                        >Select Roles
                                        </option>
                                        <!--<option value="1">Headmaster</option>-->
                                        <option value="2">Content Manager</option>
                                        <option value="3">Company Head</option>
                                        <option value="5">Student</option>
                                        <option value="8">Teacher</option>
                                        <option v-if="user.role == 'headmaster'" value="6">Chief Auditor</option>
                                        <option v-if="user.role == 'headmaster'" value="7">Auditor</option>
                                        <option v-if="user.role == 'headmaster'" value="9">Teacher Manager</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row" v-if="parseInt(userData.role) === 5">
                                <div class="col-md-12">
                                    <div class="card" v-for="(teacher, index) in userData.instructors" :key="index">
                                        <div class="row mt-2 px-3">
                                            <div class="form-group col-md-4">
                                                <label for="user-role" class="col-form-label form-label">Teacher</label>
                                                <select id="user_instructor" class="form-control custom-select" v-model="teacher.instructor_id">
                                                    <option value="0" selected="selected" disabled="disabled">Select Teacher</option>
                                                    <option :value="instructor.id" v-for="instructor in instructors" :key="instructor.id">{{ instructor.first_name + " " + instructor.last_name }}</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="user-role" class="col-form-label form-label">Lesson Mode</label>
                                                <select class="form-control custom-select" v-model="teacher.lesson_mode">
                                                    <option value="0" selected="selected" disabled="disabled">Select Lesson Mode</option>
                                                    <option value="General English">General English</option>
                                                    <option value="SAT">SAT</option>
                                                    <option value="IELTS">IELTS</option>
                                                    <option value="TOEFL">TOEFL</option>
                                                    <option value="GRE-GMAT">GRE-GMAT</option>
                                                    <option value="Other Exams">Other Exams</option>
                                                    <option value="Other English">Other English</option>
                                                    <option value="Intensive English">Intensive English</option>
                                                    <option value="Intensive SAT">Intensive SAT</option>
                                                    <option value="Intensive IELTS">Intensive IELTS</option>
                                                    <option value="Intensive TOEFL">Intensive TOEFL</option>
                                                    <option value="Intensive GRE, GMAT">Intensive GRE, GMAT</option>
                                                    <option value="SAT Subject">SAT Subject</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-4 text-right">
                                                <button class="btn btn-danger" type="button" @click="removeTeacher(index)"><i class="fa fa-times"></i></button>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="user-role" class="col-form-label form-label">Lesson Hour</label>
                                                <select class="form-control custom-select" v-model="teacher.lesson_hour">
                                                    <option value="0" selected="selected" disabled="disabled">Select Lesson Hour</option>
                                                    <option value="45">45 min</option>
                                                    <option value="60">1 hour</option>
                                                    <option value="90">1.5 hours</option>
                                                    <option value="120">2 hours</option>
                                                    <option value="150">2.5 hours</option>
                                                    <option value="180">3 hours</option>
                                                    <option value="240">4 hours</option>
                                                    <option value="300">5 hours</option>
                                                    <option value="360">6 hours</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="user-role" class="col-form-label form-label">Study Mode</label>
                                                <select class="form-control custom-select" v-model="teacher.study_mode" @change="checkStudyMode(index)">
                                                    <option value="0" disabled="disabled">Select Study Mode</option>
                                                    <option value="One to One">One to One</option>
                                                    <option value="Group Two">Group Two</option>
                                                    <option value="Group Three">Group Three</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-4" v-if="(teacher.study_mode === 'Group Two' || teacher.study_mode === 'Group Three')">
                                                <label for="user-role" class="col-form-label form-label">Group</label>
                                                <select class="form-control custom-select" v-model="teacher.student_group_id">
                                                    <option value="99" disabled="disabled">Select Group</option>
                                                    <option :value="group.id" v-for="group in groups" :key="group.id">{{ group.title }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 text-right">
                                    <button class="btn btn-success" type="button" @click="addTeacher"><i class="fa fa-plus"></i></button>
                                </div>
                            </div>
                            <div class="form-group row" v-if="parseInt(userData.role) !== 6 && parseInt(userData.role) !== 7">
                                <label
                                        for="user-role"
                                        class="col-sm-3 col-form-label form-label"
                                >Company</label>
                                <div class="col-sm-6 col-md-6">
                                    <select id="company_head" class="form-control custom-select"
                                            v-model="userData.company" @change="getInstructorList">
                                        <option value="0"
                                                selected
                                                disabled>Select Company
                                        </option>
                                        <option v-for="company in company_list" :value="company.id">{{ company.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                        for="password"
                                        class="col-sm-3 col-form-label form-label"
                                >Change Password</label>
                                <div class="col-sm-6 col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <i class="material-icons md-18 text-muted">lock</i>
                                            </div>
                                        </div>
                                        <input
                                                type="password"
                                                id="password"
                                                class="form-control"
                                                placeholder="Enter new password"
                                                v-model="userData.password"
                                        >

                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-8 offset-sm-3">
                                    <div class="media align-items-center">
                                        <div class="media-left">
                                            <button
                                                    href="#"
                                                    class="btn btn-success"
                                            >Save Changes
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                        <div
                                class="alert alert-dismissible bg-success text-white border-0 fade"
                                :class="added_success?'show':''"
                                role="alert"
                        >
                            Added new user <strong>successfully !</strong>
                        </div>
                        <div
                                class="alert alert-dismissible bg-danger text-white border-0 fade"
                                :class="added_error?'show':''"
                                v-for="error in added_error_messages.errors"
                                role="alert"
                        >
                            <strong>Error ! </strong> {{error[0]}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: [],
                userData: {
                    avatar_url: "",
                    email: "",
                    phone_number: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    instructor_id: 0,
                    role: "0",
                    instructors: [
                        {
                            instructor_id: 0,
                            lesson_mode: 0,
                            lesson_hour: 0,
                            study_mode: 0,
                            student_group_id: 99,
                        }
                    ],
                },
                company_list: [],
                added_success: false,
                added_error: false,
                added_error_messages: [],
                instructors: [],
                groups: [],
            };
        },
        mounted() {
            this.getGroups();
            this.fetchListCompany(),
            this.fetchUserList();
        },
        methods: {
            checkStudyMode: function(index) {
                if(this.userData.instructors[index].study_mode === 'One to One') {
                    this.userData.instructors[index].student_group_id = 99;
                }
            },
            addNewUser() {
                this.$store.dispatch("enableLoading");
                axios
                    .post(this.routes.admin.ADD_NEW_USER, this.userData)
                    .then(response => {
                        this.added_error = false;
                        this.added_success = true;
                        this.$router.push({name: 'admin_manange_user'})
                        this.$store.dispatch("disableLoading");
                    })
                    .catch(err => {
                        this.added_error_messages = err.response.data;
                        this.added_error = true;
                        this.added_success = false;
                        this.$store.dispatch("disableLoading");
                    });
            },
            onImageInputChanged(event) {
                var file = event.target.files[0];
                var reader = new FileReader();
                reader.readAsBinaryString(file);

                reader.onload = () => {
                    this.userData.avatar_url =
                        "data:image/jpeg;base64," + btoa(reader.result);
                    this.userData.image = "data:image/jpeg;base64," + btoa(reader.result);
                };
                reader.onerror = () => {
                    console.log("there are some problems");
                };
            },
            updateUserInfo() {
                this.$store.dispatch("enableLoading");
                axios
                    .patch(this.routes.admin.UPDATE_USER, this.userData)
                    .then(response => {
                        this.userData.avatar_url =
                            this.routes.server_api + response.data.avatar_url;
                        this.added_success = true;
                        this.added_error = false;
                        this.$store.dispatch("disableLoading");
                    })
                    .catch(err => {
                        this.added_error_messages = err.response.data;
                        this.added_error = true;
                        this.added_success = false;
                        this.$store.dispatch("disableLoading");
                    });
            },
            fetchListCompany() {
                axios.get(this.routes.company.SHOW_COMPANY).then(res => {
                    this.company_list = res.data
                }).catch(err => {
                    console.log(err.data)
                })
            },
            fetchUserList() {
                //var temp = [];
                axios.get(this.routes.common.USER_INFO).then(response => {
                    //temp.push(response.data);
                    this.user = response.data
                }).catch(err => {
                    console.log(err.data)
                })

                //console.log(temp);
            },
            getInstructorList() {
                if (this.userData.role == 5 && this.userData.company) {
                    axios
                        .post(
                            this.routes.company.INSTRUCTOR_LIST, {company_id: this.userData.company}
                        )
                        .then(res => {
                            this.instructors = res.data;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            },
            getGroups() {
                var self = this;

                axios
                    .get(
                        self.routes.company.GROUPS,
                    )
                    .then(res => {
                        self.groups = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            addTeacher: function() {
                this.userData.instructors.push({
                    instructor_id: 0,
                    lesson_mode: 0,
                    lesson_hour: 0,
                    study_mode: 0,
                    student_group_id: 99,
                });
            },
            removeTeacher: function(index) {
                this.userData.instructors.splice(index, 1);
            },
        }
    };
</script>

<style scoped lang="scss">
    .media-left {
        img {
            max-width: 100%;
        }
    }
</style>
