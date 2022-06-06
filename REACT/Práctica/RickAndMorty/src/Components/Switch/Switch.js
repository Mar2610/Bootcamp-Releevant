import {useUiModeContext} from '../../Contexts/UiModeContext';

export default function () {
  const { uiMode,toggleUiMode } = useUiModeContext();

  return (
    <div className="form-check form-switch d-flex justify-content-center">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={toggleUiMode}
        value={uiMode}
      />
    </div>
  );
}
