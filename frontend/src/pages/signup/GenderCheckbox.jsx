const GenderCheckbox = () => {
    return (
      <div className="flex">
        <div className="form-control">
          <label class="label gap-2 cursor-pointer">
            <span class="label-text">male</span>
            <input type="checkbox" class="checkbox border-slate-900" />
          </label>
        </div>
        <div className="form-control">
          <label class="label gap-2 cursor-pointer">
            <span class="label-text">female</span>
            <input type="checkbox" class="checkbox border-slate-900" />
          </label>
        </div>
      </div>
    );
}

export default GenderCheckbox;