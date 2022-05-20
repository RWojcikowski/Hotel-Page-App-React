export default function LoadingIcon(props) {
    return (

        <div class="d-flex justify-content-center">
            <div class={`spinner-border text-${props.theme}`} role="status">
                <span class="visually-hidden">Ładowanie...</span>
            </div>
        </div>
    )

}