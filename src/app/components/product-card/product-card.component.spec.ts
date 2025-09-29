import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { ProductCardComponent } from './product-card.component';
import { ProductCardItem } from './product-card.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockRendering: ComponentRendering = {
    componentName: 'ProductCard',
    dataSource: 'test-datasource',
    uid: 'test-uid',
    params: {
      GridParameters: 'col-12',
      isBadgeFullWidth: '0',
      autoPlay: 'Off',
      DynamicPlaceholderId: '8',
      FieldNames: 'Default'
    },
    fields: {
      title: { value: 'Our Products' },
      description: { value: 'Test description' },
      primaryCTA: {
        value: {
          text: 'View All Products',
          href: '/products',
          anchor: '',
          linktype: 'internal',
          class: '',
          title: '',
          target: '',
          querystring: '',
          id: 'test-id'
        }
      },
      disclaimerText: { value: 'Test disclaimer' },
      productCards: [
        {
          id: 'test-product-1',
          url: '/test-product-1',
          name: 'Test Product 1',
          displayName: 'Test Product 1',
          fields: {
            badge: null,
            productInformation: {
              id: 'test-info-1',
              url: '/test-info-1',
              name: 'Test Product 1',
              displayName: 'Test Product 1',
              fields: {
                headline: { value: 'Test Product 1' },
                description: { value: 'Test product description' },
                primaryImage: {
                  value: {
                    src: 'https://example.com/image1.jpg',
                    alt: 'Test Product 1',
                    width: '300',
                    height: '300',
                    extension: 'jpg'
                  }
                },
                addtoCart: { value: '' },
                buyOnline: { value: '' },
                wheretoBuy: { value: '' },
                ean: { value: '' },
                price: { value: '' },
                productID: { value: '' },
                productline: { value: '' },
                variant: { value: '' },
                additionalDetails: { value: '' },
                cta: {
                  value: {
                    text: '',
                    anchor: '',
                    linktype: 'internal',
                    class: '',
                    title: '',
                    target: '',
                    querystring: '',
                    id: 'test-cta-id',
                    href: '/'
                  }
                },
                label: null,
                ratingAndReview: { value: false },
                secondaryImages: [],
                socialShare: { value: false },
                variantItems: [],
                disclaimerText: { value: '' }
              }
            },
            ctaLink: {
              value: {
                text: '',
                anchor: '',
                linktype: 'internal',
                class: '',
                title: '',
                target: '',
                querystring: '',
                id: 'test-link-id',
                href: '/test-product-1'
              }
            }
          }
        }
      ]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.rendering = mockRendering;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct data', () => {
    expect(component.title).toBe('Our Products');
    expect(component.description).toBe('Test description');
    expect(component.productCards.length).toBe(1);
    expect(component.gridParameters).toBe('col-12');
    expect(component.isBadgeFullWidth).toBe(false);
  });

  it('should return correct background color', () => {
    const bgColor = component.getBackgroundColor();
    expect(bgColor).toBe('linear-gradient(135deg, #f97316 0%, #eab308 100%)');
  });

  it('should return correct grid class for col-12', () => {
    component.gridParameters = 'col-12';
    const gridClass = component.getGridClass();
    expect(gridClass).toBe('grid-cols-1 sm:grid-cols-2 lg:grid-cols-4');
  });

  it('should return correct grid class for col-6', () => {
    component.gridParameters = 'col-6';
    const gridClass = component.getGridClass();
    expect(gridClass).toBe('grid-cols-1 sm:grid-cols-2');
  });

  it('should track products by id', () => {
    const product: ProductCardItem = {
      id: 'test-id',
      url: '/test',
      name: 'Test',
      displayName: 'Test',
      fields: {
        badge: null,
        productInformation: {
          id: 'info-id',
          url: '/info',
          name: 'Test',
          displayName: 'Test',
          fields: {
            headline: { value: 'Test' },
            description: { value: 'Test' },
            primaryImage: {
              value: {
                src: 'test.jpg',
                alt: 'Test',
                width: '100',
                height: '100',
                extension: 'jpg'
              }
            },
            addtoCart: { value: '' },
            buyOnline: { value: '' },
            wheretoBuy: { value: '' },
            ean: { value: '' },
            price: { value: '' },
            productID: { value: '' },
            productline: { value: '' },
            variant: { value: '' },
            additionalDetails: { value: '' },
            cta: {
              value: {
                text: '',
                anchor: '',
                linktype: 'internal',
                class: '',
                title: '',
                target: '',
                querystring: '',
                id: 'cta-id',
                href: '/'
              }
            },
            label: null,
            ratingAndReview: { value: false },
            secondaryImages: [],
            socialShare: { value: false },
            variantItems: [],
            disclaimerText: { value: '' }
          }
        },
        ctaLink: {
          value: {
            text: '',
            anchor: '',
            linktype: 'internal',
            class: '',
            title: '',
            target: '',
            querystring: '',
            id: 'link-id',
            href: '/test'
          }
        }
      }
    };

    const trackResult = component.trackByProductId(0, product);
    expect(trackResult).toBe('test-id');
  });
});
