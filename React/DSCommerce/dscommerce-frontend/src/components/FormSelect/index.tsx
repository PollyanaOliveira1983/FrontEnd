import Select from "react-select";

export default function FormSelect(props: any) {
   
    const { 
        validation, 
        invalid = "false", 
        dirty = "false", 
        onTurnDirty, 
        ...selectProps
    } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return(

        <Select
            {...selectProps} 
            onBlur= {handleBlur} 
            data-invalid= {invalid} 
            data-dirty= {dirty}
        />
    );
}