import classes from './Checkout.module.css';

const Checkout = (props) => {

    const onHideCheckout = () => {
        props.hideCheckout(false);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.confirmOrder({
            name: event.target[0].value,
            address: event.target[1].value
        })
    }
    return (
        <form className={classes.form} onSubmit={onFormSubmit}>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" required minLength='3'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <textarea name="address"  cols="40" rows="3" required minLength='10'/>
            </div>
            <div className={classes.actions}>
            <button className={classes.submit}>Confirm</button>
            <button type="button" onClick={onHideCheckout}>Cancel</button>
            </div>
        </form>
    )
}

export default Checkout;