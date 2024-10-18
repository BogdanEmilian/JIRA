package sides.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sides.example.backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data JPA automatically generates a query from the method name
    User findByEmail(String email);
}