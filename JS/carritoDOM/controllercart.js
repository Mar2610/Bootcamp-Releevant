/**
 * @class Controller
 *
 * Recibe las interacciones del usuario y coordina las acciones entre vista y modelo
 *
 * @param model: modelo de datos
 * @param view: vista a mostrar
 */
export default class ControllerCart {
    constructor(model, view) {
        this.model = model
        this.view = view
        // Enlazar el callback de refresco de actualizaciones del modelo
        this.model.bindModelChanged(this.onModelChanged);
        // Enlazar las acciones del usuario con funciones 
        this.view.bindAdd(this.handleAdd);
        this.view.bindDelete(this.handleDelete);
        this.view.bindEmpty(this.handleEmpty);

        // Mostar el catálogo
        this.view.displayCatalog(this.model.cart.catalog.getList());
        // Mostrar el contenido del carrito
        this.view.displayCart(this.model.cart);
    }

    onModelChanged = cart => {
        this.view.displayCart(cart);
    }

    handleAdd = id => {
        this.model.add(id);
    }

    handleDelete = id => {
        this.model.delete(id);
    }

    handleEmpty = () => {
        this.model.empty();
    }
}

