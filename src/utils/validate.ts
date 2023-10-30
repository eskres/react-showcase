export default function validate(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    // Tidy classes for validation
    const classes = e.target.classList;
    if (classes) {
      classes.remove('is-valid');
      classes.remove('is-invalid');
    }
    // Check for a valid inputs using the constraint validation api
    if (!e.target.checkValidity() || e.target.value === ""){
      classes.add('is-invalid');
      return
    }
}