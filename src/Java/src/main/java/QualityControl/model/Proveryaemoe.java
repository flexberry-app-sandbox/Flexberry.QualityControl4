package QualityControl.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import QualityControl.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Проверяемое
 */
@Entity(name = "IISQualityControlПроверяемое")
@Table(schema = "public", name = "Проверяемое")
public class Proveryaemoe {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Качество")
    private String качество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Produkciya")
    @Convert("Produkciya")
    @Column(name = "Продукция", length = 16, unique = true, nullable = false)
    private UUID _produkciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Produkciya", insertable = false, updatable = false)
    private Produkciya produkciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otchet")
    @Convert("Otchet")
    @Column(name = "Отчет", length = 16, unique = true, nullable = false)
    private UUID _otchetid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otchet", insertable = false, updatable = false)
    private Otchet otchet;


    public Proveryaemoe() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public String getКачество() {
      return качество;
    }

    public void setКачество(String качество) {
      this.качество = качество;
    }


}