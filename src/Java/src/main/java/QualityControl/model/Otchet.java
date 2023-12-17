package QualityControl.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import QualityControl.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Отчет
 */
@Entity(name = "IISQualityControlОтчет")
@Table(schema = "public", name = "Отчет")
public class Otchet {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oborudovanie")
    @Convert("Oborudovanie")
    @Column(name = "Оборудование", length = 16, unique = true, nullable = false)
    private UUID _oborudovanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oborudovanie", insertable = false, updatable = false)
    private Oborudovanie oborudovanie;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otvetstvennyj")
    @Convert("Otvetstvennyj")
    @Column(name = "Ответственный", length = 16, unique = true, nullable = false)
    private UUID _otvetstvennyjid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otvetstvennyj", insertable = false, updatable = false)
    private Sotrudnik otvetstvennyj;

    @OneToMany(mappedBy = "otchet", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Proveryaemoe> proveryaemoes;


    public Otchet() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}