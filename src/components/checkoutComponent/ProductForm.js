import React, {Component} from 'react';
import {Formik, Form, Field} from "formik/dist/index";
import {connect} from "react-redux";
import {formData} from "../actions/Action";
import {
    initialValues,
    validateName,
    validateEmail,
    validateZip,
    validateShippingName,
    validateShippingEmail, validateShippingZip
} from "./formHandler";

import {toast} from 'react-toastify';
import HeadShake from 'react-reveal/HeadShake';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBillingAddressSame: false,
            isSubmitted: false,
            billingAddressFlag:false,


        }
    }

    itemAddedToast = () => toast.success('Form Submitted!!', {autoClose: 1000});
    handleSubmit = (values, {resetForm}) => {

        const {formData, toggleSubmitState} = this.props;
        formData(values);
        this.itemAddedToast();
        this.setState({
            isSubmitted: true
        })
        toggleSubmitState();

    }

    handleShippingAddressCheckbox = (setFieldValue, values) => {

        if (this.state.isBillingAddressSame) {
            if(this.state.billingAddressFlag) {
                Object.keys(values).forEach(item=>{
                    if(item.includes('shipping_')){
                        setFieldValue([item],'');
                    }
                })

            } else{
                Object.keys(values).forEach(item => {
                    setFieldValue(['shipping_' + item], '');
                });
            }


        } else {
            if(this.state.billingAddressFlag) {
                Object.keys(values).forEach(item=>{
                    if(item.includes('shipping_')){
                        let strippedField = item.substr(9,item.length);
                        setFieldValue([item],values[strippedField]);
                    }
                })

            } else{
                Object.keys(values).forEach(item => {
                    setFieldValue(['shipping_' + item], values[item]);
                });
            }
        }
        this.setState({
            isBillingAddressSame: !this.state.isBillingAddressSame,
            billingAddressFlag : true,
        })


    }

    render() {

        return (

            <Formik
                initialValues={initialValues}
                onSubmit={this.handleSubmit}
                render={({errors, setFieldValue, values, touched}) => (

                    <Form className="form-details">

                        <fieldset className="billing">
                            <legend>Billing Address</legend>
                            <div>
                                <label>Name:</label>
                                <Field
                                    className="input-fields"
                                    name="username"
                                    validate={validateName}
                                    disabled={this.state.isSubmitted}

                                />
                                {errors.username && touched.username ?
                                    <HeadShake>
                                        <div className="errors">{errors.username}</div>
                                    </HeadShake> : null
                                }
                            </div>
                            <div>
                                <label>Email:</label>
                                <Field
                                    className="input-fields"
                                    name="email"
                                    validate={validateEmail}
                                    disabled={this.state.isSubmitted}
                                />
                                {
                                    errors.email && touched.email ?
                                        <HeadShake>
                                            <div className="errors">{errors.email}</div>
                                        </HeadShake> : null
                                }
                            </div>
                            <div>
                                <label>City:</label>
                                <Field
                                    className="input-fields"
                                    name="city"
                                    disabled={this.state.isSubmitted}
                                />
                            </div>
                            <div>
                                <label>Address:</label>
                                <Field
                                    className="input-fields"
                                    name="address"
                                    disabled={this.state.isSubmitted}
                                />
                            </div>
                            <div>
                                <label>Zipcode:</label>
                                <Field
                                    className="input-fields"
                                    name="zipcode"
                                    validate={validateZip}
                                    disabled={this.state.isSubmitted}

                                />
                                {
                                    errors.zipcode && touched.zipcode ?
                                        <HeadShake>
                                            <div className="errors">{errors.zipcode}</div>
                                        </HeadShake> : null
                                }
                            </div>
                            <div>
                                <label>Country:</label>
                                <Field component="select" name="country">
                                    <option value="India">India</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="USA">USA</option>
                                </Field>
                            </div>
                        </fieldset>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={this.state.isBillingAddressSame}
                                    onChange={(e) => this.handleShippingAddressCheckbox(setFieldValue, values)}
                                />
                                Same as Billing Address
                            </label>

                        </div>

                        <fieldset className="shipping">
                            <legend>Shipping Address</legend>
                            <div>
                                <label>Name:</label>
                                <Field
                                    className="input-fields"
                                    name="shipping_username"
                                    validate={validateShippingName}
                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                />
                                {errors.shipping_username && touched.shipping_username ?
                                    <HeadShake>
                                        <div className="errors">{errors.username}</div>
                                    </HeadShake> : null
                                }
                            </div>
                            <div>
                                <label>Email:</label>
                                <Field
                                    className="input-fields"
                                    name="shipping_email"
                                    validate={validateShippingEmail}
                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                />
                                {
                                    errors.shipping_email && touched.shipping_email ?
                                        <HeadShake>
                                            <div className="errors">{errors.email}</div>
                                        </HeadShake> : null
                                }
                            </div>
                            <div>
                                <label>City:</label>
                                <Field
                                    className="input-fields"
                                    name="shipping_city"
                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                />
                            </div>
                            <div>
                                <label>Address:</label>
                                <Field
                                    className="input-fields"
                                    name="shipping_address"
                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                />
                            </div>
                            <div>
                                <label>Zipcode:</label>
                                <Field
                                    className="input-fields"
                                    name="shipping_zipcode"
                                    validate={validateShippingZip}
                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}

                                />
                                {
                                    errors.shipping_zipcode && touched.shipping_zipcode ?
                                        <HeadShake>
                                            <div className="errors">{errors.zipcode}</div>
                                        </HeadShake> : null
                                }
                            </div>
                            <div>
                                <label>Country:</label>
                                <Field
                                    component="select"
                                    name="country"
                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                >
                                    <option value="India">India</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="USA">USA</option>

                                </Field>
                            </div>

                            <button type="submit" className={this.state.isSubmitted ? "submit-button disabled" : ""}
                                    disabled={this.state.isSubmitted}>
                                Submit
                            </button>
                        </fieldset>

                    </Form>


                )}

            />


        );
    }
}

const mapDispatchToProps = {
    formData
}

export default connect(null, mapDispatchToProps)(ProductForm);