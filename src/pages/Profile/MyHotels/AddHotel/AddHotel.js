import { useRef, useState } from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";

const AddHotel = props => {
    const imageRef = useRef();
    const [form, setForm] = useState({
        name: '',
        description: '',
        city: '',
        rooms: 2,
        features: [],
        image: null,
        status: 0
    });
    const [loading, setLoading] = useState(false)

    const submit = e => {
        e.preventDefault()

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    const changeFeatureHandler = e => {
        const value = e.targe.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            const newFeatures = [...form.features, value]
            setForm({ ...form, features: newFeatures });
        } else {
            const newFeatures = form.features.filter(x => x !== value)
            setForm({ ...form, features: newFeatures });
        }


    }
    return (

        <div className="card">
            <div className="card-header">Nowy Hotel </div>
            <div className="card-body">

                <p className="text-muted"> Uzupełnij dane hotelu</p>

                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>Nazwa</label>
                        <input
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            type="text"
                            className={`form-control ${false ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">
                            Błąd
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Opis</label>
                        <textarea
                            value={form.description}
                            className={`form-control ${false ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">
                            Błąd
                        </div>
                    </div>


                    <div className="form-group">
                        <label>Miejscowość</label>
                        <input
                            value={form.city}
                            onChange={e => setForm({ ...form, city: e.target.value })}
                            type="text"
                            className={`form-control ${false ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">
                            Błąd
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Ilosć pokoi</label>
                        <select
                            value={form.rooms}
                            onChange={e => setForm({ ...form, rooms: e.target.value })}
                            className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <div className="invalid-feedback">
                            Błąd
                        </div>
                    </div>
                    <h3>Udogodnienia</h3>
                    <div className="form-group">
                        <div className=" custom-control custom-checkbox">

                            <label>TV<input
                                value="tv"
                                class="custom-control-input"
                                type="checkbox"
                                checked={form.features.find(x => x === 'tv')}
                                onChange={changeFeatureHandler} />
                            </label>
                            <label>Wifi<input
                                value="wifi"
                                class="custom-control-input"
                                type="checkbox"
                                checked={form.features.find(x => x === 'wifi')}
                                onChange={changeFeatureHandler} />
                            </label>
                            <label>Parking <input
                                value="parking"
                                class="custom-control-input"
                                type="checkbox"
                                checked={form.features.find(x => x === 'parking')}
                                onChange={changeFeatureHandler} />
                            </label>
                            <label>Ogród <input
                                value="ogród"
                                class="custom-control-input"
                                type="checkbox"
                                checked={form.features.find(x => x === 'ogród')}
                                onChange={changeFeatureHandler} />
                            </label>
                            <label>Basen <input
                                value="basen"
                                class="custom-control-input"
                                type="checkbox"
                                checked={form.features.find(x => x === 'basen')}
                                onChange={changeFeatureHandler} />
                            </label>
                            <label>Śniadania <input
                                value="śniadania"
                                class="custom-control-input"
                                type="checkbox"
                                checked={form.features.find(x => x === 'śniadania')}
                                onChange={changeFeatureHandler} />
                            </label>
                        </div>

                    </div>
                    <div className="form-group">
                        <label>Zdjecia</label>
                        <input
                            onChange={e => setForm({ ...form, image: e.target.files })}
                            type="file"
                            ref={imageRef} />
                    </div>

                    <h3>Status</h3>
                    <div className="form-group">
                        <label>Aktywny <input
                            type="radio"
                            name="active"
                            value="1"
                            onChange={e => setForm({ ...form, status: e.target.value })}
                            checked={form.status == 1} />
                        </label>
                        <label>Ukryty <input
                            type="radio"
                            name="active"
                            value="0"
                            onChange={e => setForm({ ...form, status: e.target.value })}
                            checked={form.status == 0} />
                        </label>
                    </div>
                    <div className="text-right">
                        <LoadingButton
                            loading={loading}
                            className="btn-info">Dodaj Hotel
                        </LoadingButton>

                    </div>
                </form >
            </div >
        </div >
    )

}
export default AddHotel;