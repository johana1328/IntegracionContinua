package edu.poli;

import java.net.URI;
import java.util.List;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GreetingResource {

	@GET
	@SuppressWarnings("static-access")
	public List<Product> getAllProduct() {
		return Product.listAll();
	}

	@GET
	@Path("/{id}")
	public Product get(Long id) {
		return Product.findById(id);
	}

	@POST
	@Transactional
	public Response createProduct(Product product) {
		product.persist();
		return Response.created(URI.create("/products/" + product.id)).build();
	}
	
	
	@PUT
    @Path("/{id}")
    @Transactional
    public Product update(Long id, Product product) {
		Product entity = Product.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }
        entity.name = product.name;

        return entity;
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public void delete(Long id) {
    	Product entity = Product.findById(id);
        if(entity == null) {
            throw new NotFoundException();
        }
        entity.delete();
    }
}
