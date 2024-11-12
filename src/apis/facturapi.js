const Facturapi = require('facturapi').default;

const facturapi = new Facturapi(
    "sk_test_wav9B2erg0ndDxX7Zrr30DN966ZANQJyjkp85LMRbz"
);

// Función para crear productos
async function createProduct(product) {
    const facturapiProduct = {
        description: product.description,
        product_key: "S0202306",
        price: product.price,
    };
    try {
        const createdProduct = await facturapi.products.create(facturapiProduct);
        return createdProduct;
    } catch (error) {
        console.error("Error al crear producto en Facturapi:", error);
        throw error;
    }
}

// Función para crear usuarios
async function createUsuario(usuario) {
    const facturapiUsuario = {
        legal_name: usuario.nombreCompleto,
        tax_id: usuario.rfc || "XAXX010101000",
        email: usuario.email,
        phone: usuario.telefono,
        address: {
            street: usuario.direccion.calle,
            exterior: usuario.direccion.numero,
            interior: usuario.direccion.interior || "",
            neighborhood: usuario.direccion.colonia,
            municipality: usuario.direccion.municipio,
            zip: usuario.direccion.codigoPostal,
            state: usuario.direccion.estado,
            country: "MEX"
        },
        tax_system: usuario.tax_system || "601"
    };
    try {
        const createdUsuario = await facturapi.customers.create(facturapiUsuario);
        return createdUsuario;
    } catch (error) {
        console.error("Error al crear usuario en Facturapi:", error);
        throw error;
    }
}

module.exports = {
    createProduct,
    createUsuario
};
