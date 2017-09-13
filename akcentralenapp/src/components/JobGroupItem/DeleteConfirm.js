import React, { Component } from 'react';

class DeleteConfirm extends Component {


confirmDelete(rowId)
{
    let warningText = "";
    if (confirm("Vill du verkligen radera?") == true)
    {
        this.props.removeMethod(rowId);
    }
}

  render() {

    return (
      <div>
        <button className="btn btn-danger" id="ChangeJobButton" type="button" onClick={() => this.confirmDelete(this.props.removeId)}>Radera</button>
      </div>
    );
  }
}

export default DeleteConfirm;